using System;
using System.Collections.Generic;
using System.Linq;

namespace AwesomeApp.Models
{
    public class InMemoryRepository<TModel> : IRepository<TModel>
        where TModel : IIdentifiable
    {
        private readonly Func<TModel> newModelFactory;

        public InMemoryRepository(Func<TModel> newModelFactory)
        {
            this.newModelFactory = newModelFactory;
        }

        private readonly static HashSet<TModel> Repository = new HashSet<TModel>();

        public TModel GetNew()
        {
            return newModelFactory();
        }

        public IEnumerable<TModel> GetAll()
        {
            return Repository.ToArray();
        }

        public IEnumerable<TModel> GetAll(Func<TModel, bool> filter)
        {
            return Repository.Where(filter).ToArray();
        }

        public TModel GetById(Guid id)
        {
            return Repository.SingleOrDefault(x => x.Id == id);
        }

        public TModel Save(TModel model)
        {
            Delete(model.Id);

            Repository.Add(model);

            return model;
        }

        public void Delete(Guid id)
        {
            Repository.RemoveWhere(x => x.Id == id);
        }
    }
}