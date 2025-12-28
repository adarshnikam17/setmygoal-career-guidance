import { useState } from "react";
import { saveProfile } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

export default function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    educationLevel: "10TH",
    currentClass: "10",
    board: "STATE",
    stream: "SCIENCE",
    interests: "",
    goal: "",
  });

  const submit = async () => {
    await saveProfile(userId, {
      ...form,
      interests: form.interests.split(","),
    });
    navigate(`/dashboard/${userId}`);
  };

  return (
    <>
      <h4 className="text-xl font-bold">Tell us about yourself</h4>
      <p className="text-gray-500 mb-4">
        This helps us personalize your career guidance
      </p>

      <input
        className="input"
        placeholder="Interests (comma separated)"
        onChange={(e) =>
          setForm({ ...form, interests: e.target.value })
        }
      />

      <button onClick={submit} className="btn-primary mt-4">
        Continue
      </button>
    </>
  );
}
