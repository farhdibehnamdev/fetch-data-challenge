import { Button } from "./Button";
export const Form = ({ reqType, setReqType }) => {
  console.log("reqqq sdfsdf ::", reqType);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />
    </form>
  );
};
