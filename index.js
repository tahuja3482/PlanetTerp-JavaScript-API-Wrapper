import fetch from "node-fetch";
class PlanetTerp {
  constructor() {
    let link = "https://planetterp.com/api/v1";

    const encodeGetParams = (p) =>
      Object.entries(p)
        .map((kv) => kv.map(encodeURIComponent).join("="))
        .join("&");

    async function getCourse(name, reviews) {
      if (reviews == undefined) {
        reviews = false;
      }

      const params = {
        name: name,
        reviews: reviews,
      };

      return await fetch(`${link}/course?` + encodeGetParams(params)).then(
        (res) => res.json()
      );
    }

    async function getCourses(department, reviews, limit, offset) {
      if (reviews == undefined) {
        reviews = false;
      }

      if (limit == undefined) {
        limit = 100;
      }

      if (offset == undefined) {
        offset = 0;
      }

      const params = {
        department: department,
        reviews: reviews,
        limit: limit,
        offset: offset,
      };

      return await fetch(`${link}/courses?` + encodeGetParams(params)).then(
        (res) => res.json()
      );
    }

    async function getProfessor(name, reviews) {
      if (reviews == undefined) {
        reviews = false;
      }

      const params = {
        name: name,
        reviews: reviews,
      };

      return await fetch(`${link}/professor?` + encodeGetParams(params)).then(
        (res) => res.json()
      );
    }

    async function getProfessors(type, reviews, limit, offset) {
      if (reviews == undefined) {
        reviews = false;
      }

      if (limit == undefined) {
        limit = 100;
      }

      if (offset == undefined) {
        offset = 0;
      }
      var params;
      if (type == "both") {
        params = {
          reviews: reviews,
          limit: limit,
          offset: offset,
        };
      } else {
        params = {
          type: type,
          reviews: reviews,
          limit: limit,
          offset: offset,
        };
      }

      return await fetch(`${link}/professors?` + encodeGetParams(params)).then(
        (res) => res.json()
      );
    }

    async function getGradesByCourse(course, semester, section) {
        var params = {
            course: course,
            semester: semester,
            section: section
        }

        if (semester == "all") {
            delete params['semester']
        }
        
        if (section == "all") {
          delete params['section'];
        }

        return await fetch(
          `${link}/grades?` + encodeGetParams(params)
        ).then((res) => res.json());
    }

    async function getGradesByProfessor(professor, semester, section) {
      var params = {
        professor: professor,
        semester: semester,
        section: section,
      };

      if (semester == "all") {
        delete params['semester'];
      }

      if (section == "all") {
        delete params['section'];
      }

      return await fetch(`${link}/grades?` + encodeGetParams(params)).then(
        (res) => res.json()
      );
    }

    async function getGradesByBoth(course, professor, semester, section) {
      var params = {
        course: course,
        professor: professor,
        semester: semester,
        section: section,
      };

      if (semester == "all") {
        delete params["semester"];
      }

      if (section == "all") {
        delete params["section"];
      }

      return await fetch(`${link}/grades?` + encodeGetParams(params)).then(
        (res) => res.json()
      );
    }

  }
}

export default new PlanetTerp();
