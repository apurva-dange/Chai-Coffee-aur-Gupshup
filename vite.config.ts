import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
export default defineConfig({plugins:[react()],base:"/Chai-Coffee-aur-Gupshup/",test:{environment:"jsdom",globals:true}});
