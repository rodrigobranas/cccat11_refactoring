import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export default class OvernightFareCalculatorHandler extends FareCalculatorHandler {
	FARE = 3.9;
	
	getFare(): number {
		return this.FARE;
	}

	calculate(segment: Segment): number {
		if (segment.isOvernight() && !segment.isSunday()) {
			return this.calculateFare(segment);
		}
		if (!this.next) throw new Error("end of chain");
		return this.next.calculate(segment);
	}

}