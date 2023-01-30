import RequiresAuth from "../Components/RequiresAuth";
import useSession from "../hooks/useSession";

const SessionPage = () => {
  const session = useSession();

  return (
    <RequiresAuth>
      <div>
        <h1>Session</h1>
        <div>{JSON.stringify(session)}</div>
      </div>
    </RequiresAuth>
  );
};

export default SessionPage;
