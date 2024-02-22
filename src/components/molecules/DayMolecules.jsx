const DayMolecules = ({ day }) => {
  return (
    <div>
      <h1 className="italic">{day.hari}</h1>
      <p
        className={`mt-2  ${
          day.tanggal === "02" &&
          "rounded-full border border-dotted border-primary w-10 h-10 flex justify-center items-center "
        }`}
      >
        {day.tanggal}
      </p>
    </div>
  );
};

DayMolecules.propTypes = {
  day: {
    hari: String,
    tanggal: String,
  },
};

export default DayMolecules;
