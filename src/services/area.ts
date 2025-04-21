import SquareRepository from "../repository";

class AreaService {
    private squareRepository: SquareRepository;

    constructor() {
        this.squareRepository = new SquareRepository();
    }

    calculateArea(id: number): number | null {
        const square = this.squareRepository.getSquareById(id);
        if (!square) return null;
        return square.sideLength ** 2;
    }
}

export default AreaService;