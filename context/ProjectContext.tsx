"use client";

import { createContext, useContext, ReactNode, useReducer } from "react";
import { State, Action } from "@/types";

const initialState: State = {
	show: false,
	title: "",
	img: "/default.svg",
	imgAlt: "image icon",
	stack: [],
	link: "",
	description: "",
	points: [],
};

const ProjectContext = createContext<{
	state: State;
	dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "SET_PROJECT_DATA":
			return { ...state, show: true, ...action.payload };
		case "HIDE_PROJECT":
			return { ...initialState };
		default:
			return state;
	}
}

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ProjectContext.Provider value={{ state, dispatch }}>
			{children}
		</ProjectContext.Provider>
	);
};

export const useProjectInfo = () => {
	const context = useContext(ProjectContext);

	if (!context) {
		throw new Error(
			"useProjectInfo muse be used withing ProjectContext.Provider"
		);
	}

	return context;
};
