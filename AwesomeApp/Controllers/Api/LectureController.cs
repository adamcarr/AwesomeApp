using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using AwesomeApp.Models;

namespace AwesomeApp.Controllers.Api
{
    public class LectureController : ApiController
    {
        private readonly IRepository<ILecture> repository;

        public LectureController(IRepository<ILecture> repository )
        {
            this.repository = repository;
        }

        // GET api/lecture
        public IEnumerable<Lecture> Get()
        {
            return repository.GetAll().Cast<Lecture>();
        }

        // GET api/lecture/5
        public Lecture Get(Guid id)
        {
            return repository.GetById(id) as Lecture;
        }

        // POST api/lecture
        public void Post(Lecture value)
        {
            repository.Save(value);
        }

        // PUT api/lecture/5
        public void Put(Guid id, Lecture value)
        {
            value.Id = id;
            repository.Save(value);
        }

        // DELETE api/lecture/5
        public void Delete(Guid id)
        {
            repository.Delete(id);
        }
    }
}
