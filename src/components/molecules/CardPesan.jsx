import PropTypes from "prop-types"

const CardPesan = ({data}) => {
  return (
    <div className=" w-[300px] h-[300px] shadow-md rounded-md bg-colorNav/50 p-4">
        <h1 className="font-semibold text-pink-950 ">{data.name}</h1>
        <p className=" pt-3 font-alice">{data.pesan}</p>
    </div>
  )
}

CardPesan.propTypes = {
  data: PropTypes.object,
}

export default CardPesan