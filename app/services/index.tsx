import request from "../helpers/api";

export default class Service {
    private url: string;
    private authUrl: string;

    constructor() {
        this.url =
            process.env.NEXT_PUBLIC_NODE_PROD == "production"
                ? process.env.NEXT_PUBLIC_PROD_URL || ""
                : process.env.NEXT_PUBLIC_DEV_URL || "";

        this.authUrl =
            process.env.NEXT_PUBLIC_NODE_PROD == "production"
                ? process.env.NEXT_PUBLIC_PROD_AUTH_URL || ""
                : process.env.NEXT_PUBLIC_DEV_AUTH_URL || "";
    }



    public Login(fieldsValue: any) {
        return new Promise<any>((resolve, reject) => {
            const url = `${this.authUrl}/api/login`;
            const metodo = "POST";
            const params = {
                email: fieldsValue.email,
                password: fieldsValue.password,
            };
            request(url, params, metodo, true).then((res: any) => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
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

    public Register(fieldsValue: any) {
        return new Promise<any>((resolve, reject) => {
            const url = `${this.authUrl}/api/register`;
            const metodo = "POST";
            const params = {
                name: fieldsValue.name,
                email: fieldsValue.email,
                password: fieldsValue.password,
                password_confirmation: fieldsValue.password_confirmation,
                empresa: fieldsValue.empresa,
                cargo: fieldsValue.cargo,
                phone: fieldsValue.phone,
                celular: fieldsValue.celular,
                doc_identidad: fieldsValue.doc_identidad,
                tipo_doc_identidad: fieldsValue.tipo_doc_identidad,
                departamento: fieldsValue.departamento,
                municipio: fieldsValue.municipio,
                direccion: fieldsValue.direccion,
                role: fieldsValue.role,
                vendedor_id: fieldsValue.vendedor,
                status: 'activo',
            };
            request(url, params, metodo, true).then((res: any) => {
                resolve(res);
            }).catch((error) => {
                reject(error)
            });
        });
    }

}