import { Skeleton } from 'antd';

const PostSkeleton = () => {
  return (
    <>
      <div className="PostSkeleton">
        <Skeleton avatar paragraph={{ rows: 4 }} />
      </div>
      <div className="PostSkeleton">
        <Skeleton avatar paragraph={{ rows: 4 }} />
      </div>
    </>
  );
};

export default PostSkeleton;
