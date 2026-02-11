
import { MockService } from "../../services/MockService";

export class UserControllerV1 {
    private service: MockService;

    constructor() {
        this.service = new MockService();
    }

    getUser(req: any, res: any) {
        const data = this.service.getData();
        res.json(data);
    }
}
