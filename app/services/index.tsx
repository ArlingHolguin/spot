import request from "../helpers/api";

export default class Service {
    private url: string;

    constructor() {
        this.url =
            process.env.NEXT_PUBLIC_NODE_PROD == "production"
                ? process.env.NEXT_PUBLIC_PROD_URL || ""
                : process.env.NEXT_PUBLIC_DEV_URL || "";
    }



    

    //crear url acortada
    public Shortener(fieldsValue: any) {
        return new Promise<any>((resolve, reject) => {
            const url = `${this.url}/api/v1/urls`;
            const metodo = "POST";
            const params = {
                original_url: fieldsValue.url,
            };
            request(url, params, metodo, true).then((res: any) => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }

    //obtener urls acortadas
    public GetUrls() {
        return new Promise<any>((resolve, reject) => {
            const url = `${this.url}/api/v1/urls`;
            const metodo = "GET";
            request(url, {}, metodo, true).then((res: any) => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }

    //eliminar una url acortada
    public DeleteUrl(short_code: string) {
        return new Promise<any>((resolve, reject) => {
            const url = `${this.url}/api/v1/urls/${short_code}`;
            const metodo = "DELETE";
            request(url, {}, metodo, true).then((res: any) => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }


}