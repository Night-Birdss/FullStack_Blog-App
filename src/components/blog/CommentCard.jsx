import { useParams } from "react-router";

const CommentCard = ({ comment }) => {
  const { id } = useParams(); // URL'den id parametresini alıyoruz

  if (comment.blogId !== id) {
    return null; // Eşleşmezse hiçbir şey render etme
  }

  console.log(comment.blogId);
  return (
    <div>
      <h4>{comment.userId.username}</h4> {/* Yazan kişi ismi */}
      <p>{comment.comment}</p> {/* Yorum içeriği */}
    </div>
  );
};

export default CommentCard;
