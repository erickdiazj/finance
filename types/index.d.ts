/* eslint-disable no-unused-vars */

declare type AccountColumnProps = {
  account: string;
  accountId: string;
};

declare type CategoryColumnProps = {
  id: string;
  category: string | null;
  categoryId: string | null;
};

declare type ImportCardProps = {
  data: string[][];
  onCancel: () => void;
  // eslint-disable-next-line
  onSubmit: (data: any) => void;
};

declare type ImportTableProps = {
  headers: string[];
  body: string[][];
  selectedColumns: Record<string, string | null>;
  onTableHeadSelectChange: (columnIndex: number, value: string | null) => void;
};

declare type TableHeadProps = {
  columnIndex: number;
  selectedColumns: Record<string, string | null>;
  onChange: (columnIndex: number, value: string | null) => void;
};

declare type UploadButtonProps = {
  // eslint-disable-next-line
  onUpload: (results: any) => void;
};
