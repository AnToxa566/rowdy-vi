import { AccountsGrid, TransferButton } from "./components";

export default function AccountsPage() {
  return (
    <div className="flex flex-col gap-4">
      <AccountsGrid />

      <div className="w-fit">
        <TransferButton />
      </div>
    </div>
  );
}
