import languages from "./data/languages";
import levelOptions from "./data/level";

export default function Home() {
  let levelOptionsList = levelOptions.map((level) => (
    <option key={level.value} value={level.value}>
      {level.label}
    </option>
  ));
  return (
    <div className="app-shell">
      <main className="dashboard">
        <section className="profile-grid">
          <article className="card profile-card">
            <div>
              <div className="avatar-wrap">
                <img src="empty-user-image.png" alt="User picture" className="user-image" />
              </div>

              <p className="muted student-subtitle">Enter student's name</p>
              <input></input>
              <p className="muted student-subtitle">Language of study</p>
              <select name="language" id="language" defaultValue="">
                <option value="" disabled>Select language</option>

                {languages.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.label}
                  </option>
                ))}
              </select>
              <p className="muted student-subtitle">Current level</p>
              <select name="level" id="level">
                <option value="" disabled selected>Select current level</option>
                {levelOptionsList}
              </select>

              <p className="muted student-subtitle">Target level</p>
              <select name="targetLevel" id="targetLevel">
                <option value="" disabled selected>Select target level</option>
                {levelOptionsList}
              </select>
              <div className="form-actions">
                <button type="submit" className="button blue-button" onClick = {() => alert("Saved")} >+ Add</button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>

  );
}