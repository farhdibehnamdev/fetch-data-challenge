import { Button } from "./Button";
export const Form = (setReqType) => {
  return (
    <div>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <Button buttonText="users" onClick={() => setReqType("users")} />
        <Button buttonText="posts" onClick={() => setReqType("posts")} />
        <Button buttonText="comments" onClick={() => setReqType("comments")} />
      </form>
    </div>
  );
};
