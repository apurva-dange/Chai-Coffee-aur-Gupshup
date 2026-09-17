export type Duration=15|45;export type Slots=Record<string,string[]>;
export type BookingInput={name:string;email:string;startIso:string;duration:Duration;topic:string;notes?:string;website?:string};
export type BookingResult={ok:boolean;error?:string;startIso?:string;meetLink?:string|null};
const API_URL=import.meta.env.VITE_BOOKING_API_URL?.trim();
function url(){if(!API_URL)throw new Error("Booking is being configured. Please try again soon.");return API_URL}
async function parse<T>(r:Response){const text=await r.text();let data:T&{error?:string};try{data=JSON.parse(text)}catch{throw new Error("The booking service returned an unexpected response.")}if(!r.ok||data.error)throw new Error(data.error||"The booking service is unavailable.");return data}
export async function getAvailability(year:number,month:number,duration:Duration){const u=new URL(url());u.searchParams.set("action","availability");u.searchParams.set("year",String(year));u.searchParams.set("month",String(month));u.searchParams.set("duration",String(duration));return parse<{slots:Slots}>(await fetch(u,{redirect:"follow"}))}
export async function createBooking(input:BookingInput){return parse<BookingResult>(await fetch(url(),{method:"POST",redirect:"follow",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action:"booking",...input})}))}
