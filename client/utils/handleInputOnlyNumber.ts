export default (e: any) => {
  if (Number.isNaN(e?.target?.valueAsNumber)) e.target.value = "";
};
