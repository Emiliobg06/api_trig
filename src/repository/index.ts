import { squares, Square } from "../DB";

class SquareRepository {
    getSquareById(id: number): Square | undefined {
        return squares.find((square) => square.id === id);
    }
}

export default SquareRepository;