export class HTTPError extends Error {
        status: number; // Add status property

        constructor(response: any) {
            super(response.statusText);
            this.status = response.status;
        }
}