"use client";

import { useRouter } from "next/navigation";
import REACT, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/API/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to create ticket");
    }

    router.refresh();
    router.push("/");
  };

  const startingTicketData = {
    title: "",
    description: "",
    category: "Esko",
    priority: 1,
    progress: 0,
    status: "not started",
    active: true,
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="flex flex-col gap-4 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 className="mb-4 font-semibold">Create your ticket</h3>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required={true}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          rows="5"
          onChange={handleChange}
          required={true}
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required={true}
        >
          <option value="Printing">Printing</option>
          <option value="Laminating">Laminating</option>
          <option value="Esko">Esko</option>
          <option value="Finishing">Finishing</option>
        </select>

        <label htmlFor="priority">Priority</label>
        <div className="flex justify-start items-center w-3/4">
          <input
            id="priority-1"
            type="radio"
            name="priority"
            value={1}
            onChange={handleChange}
            checked={formData.priority == 1}
          />
          <label htmlFor="priority-1">1</label>

          <input
            id="priority-2"
            type="radio"
            name="priority"
            value={2}
            onChange={handleChange}
            checked={formData.priority == 2}
          />
          <label htmlFor="priority-2">2</label>

          <input
            id="priority-3"
            type="radio"
            name="priority"
            value={3}
            onChange={handleChange}
            checked={formData.priority == 3}
          />
          <label htmlFor="priority-3">3</label>

          <input
            id="priority-4"
            type="radio"
            name="priority"
            value={4}
            onChange={handleChange}
            checked={formData.priority == 4}
          />
          <label htmlFor="priority-4">4</label>

          <input
            id="priority-5"
            type="radio"
            name="priority"
            value={5}
            onChange={handleChange}
            checked={formData.priority == 5}
          />
          <label htmlFor="priority-5">5</label>
        </div>

        <label htmlFor="progress">Progress</label>

        <input
          id="progress"
          type="range"
          name="progress"
          min="0"
          max="100"
          value={formData.progress}
          onChange={handleChange}
        />

        <label htmlFor="status">Status</label>

        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not started</option>
          <option value="in progress">In progress</option>
          <option value="done">Done</option>
        </select>

        <button className="fill-btn" type="submit">
          Create Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
