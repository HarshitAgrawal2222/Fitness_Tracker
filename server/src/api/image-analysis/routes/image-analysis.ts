import { config } from "process";
import imageAnalysis from "../controllers/image-analysis";

export default {
    routes:[
        {
            method: "POST",
            path: "/image-analysis",
            handler:"image-analysis.analyze",
            config:{ auth: false },
        }
    ]
}