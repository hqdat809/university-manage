import { Skeleton } from 'antd';

interface ICommentSkeletonProps {
  style?: React.CSSProperties;
}

const CommentSkeleton = ({ style }: ICommentSkeletonProps) => {
  return (
    <div className="CommentSkeleton" style={style}>
      <Skeleton avatar paragraph={{ rows: 1 }} />
    </div>
  );
};

export default CommentSkeleton;
