import dotenv from "dotenv";

const getFileWithConfigurations = () => {
    let environment = process.env.NODE_ENV || "";
    environment = environment.toLowerCase();
    return (environment.length == 0 ? "./.env": `./.env-${environment}`);
}

(function loaderConfigurations() {
    dotenv.config({ path: getFileWithConfigurations() })
}());