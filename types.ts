export type State = {
	show: boolean;
	title: string;
	img: string;
	imgAlt: string;
	stack: string[];
	link: string;
	description: string;
	points: string[];
};

export type Action =
	| {
			type: "SET_PROJECT_DATA";
			payload: Partial<State>;
	  }
	| { type: "HIDE_PROJECT" };
