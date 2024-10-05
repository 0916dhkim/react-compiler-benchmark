export const Cell = (props) => {
  return (
    <td>
      <input
        type="text"
        value={props.value}
        data-row={props.rowIndex}
        data-column={props.columnIndex}
      />
    </td>
  );
};
