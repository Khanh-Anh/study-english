import Spreadsheet from "react-spreadsheet";
interface CustomSpreadsheetProps {
  data: { value: string }[][];
}

const datas = [
  [{ value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }],
  [{ value: "" }, { value: "" }, { value: "" }],
];

function CustomSpreadsheet({ data = datas }: CustomSpreadsheetProps) {
  const columnLabels = ["Từ mới", "Định nghĩa", "Ví dụ", "Phiên âm"];
  console.log(data);
  
  return (
    <div>
      <h1>Tạo flashcards</h1>
      <Spreadsheet data={data} columnLabels={columnLabels} />
      <button>save</button>
    </div>
  );
}

export default CustomSpreadsheet;
