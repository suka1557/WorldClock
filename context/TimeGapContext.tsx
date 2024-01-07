// TimeGapContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TimeGapContextProps {
  TimeGapState: number;
  setTimeGapState: React.Dispatch<React.SetStateAction<number>>;
}

const TimeGapContext = createContext<TimeGapContextProps | undefined>(undefined);

interface TimeGapContextProviderProps {
  children: ReactNode;
}

export const TimeGapContextProvider: React.FC<TimeGapContextProviderProps> = ({ children }) => {
  const [TimeGapState, setTimeGapState] = useState<number>(0);

  return (
    <TimeGapContext.Provider value={{ TimeGapState, setTimeGapState }}>
      {children}
    </TimeGapContext.Provider>
  );
};

export const useTimeGapContext = () => {
  const context = useContext(TimeGapContext);
  if (!context) {
    throw new Error('useTimeGapContext must be used within a TimeGapContextProvider');
  }
  return context;
};
