using System;
using System.Collections.Generic;

namespace AwesomeApp.Models
{
    public interface IRepository<TModel> : IRepository<TModel, Guid>
        where TModel : IIdentifiable
    {
        
    }

    public interface IRepository<TModel, in TId>
        where TModel : IIdentifiable<TId>
    {
        TModel GetNew();
        IEnumerable<TModel> GetAll();
        IEnumerable<TModel> GetAll(Func<TModel, bool> filter);
        TModel GetById(TId id);
        TModel Save(TModel model);
        void Delete(TId id);
    }
}