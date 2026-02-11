
import { MockService } from "../../services/MockService";

export class UserControllerV2 {
    private service: MockService;

    constructor() {
        this.service = new MockService();
    }

    getUser(req: any, res: any) {
        const data = this.service.getData();
        // V2 change: returns nested object
        res.json({
            user: data,
            meta: {
                version: "v2"
            }
        });
    }
}
