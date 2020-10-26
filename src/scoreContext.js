import React from "react";

const ScoreContext = React.createContext();

const ScoreProvider = ScoreContext.Provider;
const ScoreConsumer = ScoreContext.Consumer;

export { ScoreProvider, ScoreConsumer };