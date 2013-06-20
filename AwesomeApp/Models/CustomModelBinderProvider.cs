using System;
using System.Web.Http;
using System.Web.Http.ModelBinding;

namespace AwesomeApp.Models
{
    public class CustomModelBinderProvider : ModelBinderProvider
    {
        private readonly Func<IRepository<ILecture>> lectureRepositoryFactory;

        public CustomModelBinderProvider(Func<IRepository<ILecture>> lectureRepositoryFactory)
        {
            this.lectureRepositoryFactory = lectureRepositoryFactory;
        }

        public override IModelBinder GetBinder(HttpConfiguration configuration, Type modelType)
        {
            if (modelType == typeof (ILecture))
            {
                return new ILectureModelBinder(lectureRepositoryFactory());
            }

            return null;
        }
    }
}