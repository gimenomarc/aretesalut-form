export default function HormonalHealth() {
    return (
      <div>
        <label className="block mb-4">
          <span className="text-gray-700">Ciclos menstruales regulares:</span>
          <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Sí</option>
            <option>No</option>
          </select>
        </label>
        {/* Add additional fields as needed */}
      </div>
    );
  }
  