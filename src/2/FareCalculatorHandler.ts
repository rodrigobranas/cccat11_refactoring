import Segment from "./Segment";

export default abstract class FareCalculatorHandler {
	abstract calculate (segment: Segment): number;
	abstract getFare (): number;

	constructor (readonly next?: FareCalculatorHandler) {
	}

	calculateFare (segment: Segment) {
		return segment.distance * this.getFare();
	}
}