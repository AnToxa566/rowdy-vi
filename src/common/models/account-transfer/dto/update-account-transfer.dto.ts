export interface UpdateAccountTransferDto {
  fromId?: string;
  toId?: string;
  sum?: number;
  fromOldSum?: number;
  toOldSum?: number;
  fromNewSum?: number;
  toNewSum?: number;
}
