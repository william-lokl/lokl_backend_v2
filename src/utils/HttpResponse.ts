export class HttpResponse {
	status: boolean;
	message: string;
	data: object;

	constructor() {
		this.status = false;
		this.message = "";
		this.data = {};
	}

	findAll(allRecords: any) {
		this.status = true;
		this.message = `Todos los registros encontrados`;
		this.data = allRecords;
	}

    error(message: any) {
		this.message = message;
		this.data = {};
	}

	emptyRecords() {
		this.message = "Objeto vacío";
		this.data = [];
	}

}
