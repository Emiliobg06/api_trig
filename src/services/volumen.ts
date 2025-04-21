import SquareRepository from "../repository";

class VolumeService {
    private squareRepository: SquareRepository;

    constructor() {
        this.squareRepository = new SquareRepository();
    }

    calculateVolume(id: number): number | null {
        const square = this.squareRepository.getSquareById(id);
        if (!square) return null;
        return square.sideLength ** 3;
    }
}

export default VolumeService;