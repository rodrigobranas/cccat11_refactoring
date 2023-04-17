import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export default class Ride {
	private segments: Segment[];
	MIN_FARE = 10;

	constructor (readonly fareCalculatorHandler: FareCalculatorHandler) {
		this.segments = [];
	}

	addSegment (distance: number, date: Date) {
		this.segments.push(new Segment(distance, date));
	}

	calculateFare () {
		let fare = 0;
		for (const segment of this.segments) {
			fare += this.fareCalculatorHandler.calculate(segment);
		}
		return (fare < this.MIN_FARE) ? this.MIN_FARE : fare;
	}
}