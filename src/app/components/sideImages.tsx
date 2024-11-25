interface Props {
  accordion: number;
}
export default function SideImages({ accordion }: Props) {
  return (
    <div className="w-1/2">
      <img
        src="https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg"
        alt=""
        className={`h-[400px] rounded-md shadow-md ${
          accordion > 0 ? "hidden" : "block"
        }`}
      />
      <img
        src="https://media.designcafe.com/wp-content/uploads/2023/07/05195443/modern-interior-design.jpg"
        alt=""
        className={` ${
          accordion === 1 ? "block" : "hidden"
        } h-[400px] rounded-md shadow-md `}
      />
      <img
        src="https://sumesshmenonassociates.com/wp-content/uploads/2021/12/001.jpg"
        alt=""
        className={` ${
          accordion === 2 ? "block" : "hidden"
        } h-[400px] rounded-md shadow-md `}
      />
      <img
        src="https://thestudiobangalore.com/blog/wp-content/uploads/2024/03/Interior-Design-scaled.jpg  "
        alt=""
        className={` ${
          accordion === 3 ? "block" : "hidden"
        } h-[400px] rounded-md shadow-md `}
      />
    </div>
  );
}
