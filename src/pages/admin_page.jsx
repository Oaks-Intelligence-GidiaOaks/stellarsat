const AdminPage = () => {
  return (
    <div>
      <iframe
        src="https://stellar-sanity.sanity.studio/admin"
        frameborder="0"
        style={{ width: "100%", height: "800px", border: "none" }}
      ></iframe>

      <button>
        <a href="https://stellar-sanity.sanity.studio/admin" target="_blank">
          Open Admin
        </a>
      </button>
    </div>
  );
};

export default AdminPage;
