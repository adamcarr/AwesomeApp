using System;
using System.Web.Http.Controllers;
using System.Web.Http.ModelBinding;
using Autofac.Integration.Mvc;

namespace AwesomeApp.Models
{
    [ModelBinderType(typeof(ILecture))]
    public class ILectureModelBinder : BaseModelBinder, IModelBinder
    {
        private readonly IRepository<ILecture> repository;

        public ILectureModelBinder(IRepository<ILecture> repository)
        {
            this.repository = repository;
        }

        public bool BindModel(HttpActionContext actionContext, ModelBindingContext bindingContext)
        {
            var lecture = bindingContext.ValueProvider.GetValue("Id") == null
                              ? repository.GetNew()
                              : repository.GetById(Guid.Parse(bindingContext.ValueProvider.GetValue("Id").AttemptedValue));

            lecture.Name = AssignValueIfNotNull(lecture.Name, bindingContext.ValueProvider, "Name");
            lecture.Description = AssignValueIfNotNull(lecture.Description, bindingContext.ValueProvider, "Description");

            bindingContext.Model = lecture;

            return true;
        }
    }
}