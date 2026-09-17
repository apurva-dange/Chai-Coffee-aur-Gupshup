export const MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"];
const OFFSET=-7*60*60*1000;
export function phoenixTodayParts(now=Date.now()){const d=new Date(now+OFFSET);return{year:d.getUTCFullYear(),month:d.getUTCMonth(),day:d.getUTCDate()}}
export function formatDateLong(ymd:string){const[y,m,d]=ymd.split("-").map(Number);const date=new Date(Date.UTC(y,m-1,d));const wd=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][date.getUTCDay()];return`${wd}, ${MONTHS[m-1]} ${d}, ${y}`}
export function formatTime12(hhmm:string){const[h,m]=hhmm.split(":").map(Number);return`${h%12||12}:${String(m).padStart(2,"0")} ${h>=12?"PM":"AM"}`}
