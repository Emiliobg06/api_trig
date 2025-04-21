import SquareRepository from "../repository";

class PerimeterService {
    private squareRepository: SquareRepository;

    constructor() {
        this.squareRepository = new SquareRepository();
    }

    calculatePerimeter(id: number): number | null {
        const square = this.squareRepository.getSquareById(id);
        if (!square) return null;
        return 4 * square.sideLength;
    }
}

export default PerimeterService;