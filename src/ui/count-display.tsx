import * as React from "react";
import cx from "clsx";
import { scope } from "../lib/utils";



interface CountDisplayProps {
	count: number;
	className?: string;
}

const CountDisplay: React.FunctionComponent<CountDisplayProps> =
	({ count, className }: CountDisplayProps) => {
		let actualCount = String(Math.max(Math.min(count, 999), -99));
		return (
			<div className={cx(scope("count-display"), className)}>{actualCount}</div>
		);
	};



CountDisplay.displayName = "Count"

export { CountDisplay };
