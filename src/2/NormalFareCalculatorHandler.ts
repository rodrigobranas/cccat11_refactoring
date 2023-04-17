import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export default class NormalFareCalculatorHandler extends FareCalculatorHandler {
	FARE = 2.1;

	getFare(): number {
		return this.FARE;
	}

	calculate(segment: Segment): number {
		if (!segment.isOvernight() && !segment.isSunday()) {
			return this.calculateFare(segment);
		}
		if (!this.next) throw new Error("end of chain");
		return this.next.calculate(segment);
	}

}