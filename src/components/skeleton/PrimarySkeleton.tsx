import { Skeleton } from "antd";

const PrimarySkeleton = ({ ...rest }) => {
  return (
    <Skeleton.Input active size='large' className={`PrimarySkeleton__overview ${rest.className}`} />
  )
}

export default PrimarySkeleton;