import { useNavigation } from "react-router-dom";
function SubmitBtn({ text }) {
  const navigate = useNavigation();

  const isSubmitting = navigate.state === "submitting";
  return (
    <button
      className="btn btn-primary btn-block capitalize"
      type="submit"
      disable={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
}
export default SubmitBtn;
