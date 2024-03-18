import { useCallback } from "react";
import { useMergeLink } from "@mergeapi/react-merge-link";

function App() {
  const onSuccess = useCallback((public_token: string) => {
    console.log(public_token);
  }, []);

  const { open, isReady } = useMergeLink({
    linkToken: "WOlzfNJZZNO0jkxXPH_Pw6hM3P2dPpeUUdNGhwhyPnVgnPVndY29Vg",
    onSuccess,
  });

  return (
    <button
      style={{
        padding: "8px 14px",
        backgroundColor: "#03fdac",
        border: "1px solid #0001",
        borderRadius: "4px",
        cursor: isReady ? "pointer" : "not-allowed",
        color: "black",
        fontSize: "14px",
      }}
      disabled={!isReady}
      onClick={open}
    >
      Preview
    </button>
  );
}

export default App;
