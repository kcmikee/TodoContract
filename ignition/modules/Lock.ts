import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TodoModule = buildModule("TodoModule", (m) => {
  const lock = m.contract("Todo");

  return { lock };
});

export default TodoModule;
