import { Button } from "../../../packages/ui/src/button";



export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button label="Click me" onClick={() => alert("Button clicked!")} />
    </div>
  );
}
